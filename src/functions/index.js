export const getDateAndTime = (now) => {
    //Time
    const today = now.toLocaleTimeString();
    const localTime = today.substring(0, 5);

    //Day of the week
    const daysOfWeek = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Чертверг',
        'Пятница',
        'Суббота',
    ];

    //Date in rus
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
    const months = [
        'Янв.',
        'Февр.',
        'Март',
        'Апр.',
        'Май',
        'Июня',
        'Июля',
        'Авг.',
        'Сент.',
        'Октб.',
        'Нояб.',
        'Дек.',
    ];
    const month = months[now.getMonth()];

    const dayOfTheWeek = daysOfWeek[now.getDay()];
    return { localTime, dayOfTheWeek, dayOfMonth, month, year };
};

export const convertDate = (date) => {
    const newDate = date.toLocaleString().replace(/\./g, '/').slice(0, 10);
    return newDate;
};

export const getProductsSumInOrder = (id, arr) => {
    let count = 0;

    arr.map(item => {
        item.order === id ? ++count : null
    })

    return count;
}

export const getSelectData = (arr) => {
    let selectStatusData = [];
    let selectOrdersNameData = [];
    arr.orders.map(item => {
        if (item.status === "") {
            selectStatusData.push("Не выбран статус");
        }
        if (item.title === "") {
            selectOrdersNameData.push("Не указано имя");
        } else {
            selectStatusData.push(item.status.trim());
            selectOrdersNameData.push(item.title.trim())
        }
    });
    selectStatusData = [...new Set(selectStatusData)];
    selectOrdersNameData = [...new Set(selectOrdersNameData)];
    return { selectStatusData, selectOrdersNameData }
}

export const getOrderName = (arr, id) => {
    let text
    arr.map(item => item.id === id ? text = item.title : null)
    return text
}

export const getTotalOrderCost = (arr, id) => {
    let sum;
    const sumArr = [
        {
            total: 0,
            currency: 'USD',
            isDefault: '',
        },
        {
            total: 0,
            currency: 'UAH',
            isDefault: '',
        },
    ];
    arr.map((item) => {

        if (item.order === id)
            sum = item.price.reduce((accum, item) => {
                if (item.symbol === 'USD') {
                    sumArr[0].total += +item.value;
                    sumArr[0].isDefault = item.isDefault;
                    return accum;
                } else {
                    sumArr[1].total += +item.value;
                    sumArr[1].isDefault = item.isDefault;
                    return accum;
                }
            }, sumArr);
    });
    return sum;
};