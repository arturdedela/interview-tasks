/**
* Банкомат.
*
* В банкомате есть купюры - 50, 100, 500, 1000, 5000 руб.
* Есть ограничение на количество каждой из купюр (limits), его нужно держать в актуальном состоянии
* Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму,
* в виде строки указанного формата. Начинать с самой крупной.
* Если выдать запрашиваемую сумму не получается, вернуть ошибку.
*/

const limits = {
    '50': 5,
    '100': 10,
    '500': 5,
    '1000': 10,
    '5000': 5
};

function atm(sum, limits) {
    let maxSum = 0;
    for (const k in limits) {
        maxSum += Number(k) * limits[k];
    }

    if (sum > maxSum) {
        return 'Error';
    }

    const bankNotesIssued = {
        '50': 0,
        '100': 0,
        '500': 0,
        '1000': 0,
        '5000': 0
    }
    
    
    while (sum > 0) {
        let maxBankNote = 0;
        for (const bankNote in limits) {
            if (Number(bankNote) <= sum && limits[bankNote] > 0 && Number(maxBankNote) < Number(bankNote)) {
                maxBankNote = bankNote;
            }
        }
        
        if (maxBankNote === 0) {
            return 'Error';
        }
        
        const maxValue = Number(maxBankNote);
        
        bankNotesIssued[maxBankNote] = Math.min((sum - sum % maxValue) / maxValue, limits[maxBankNote]);
        
        sum -= maxValue * bankNotesIssued[maxBankNote];
    }
    
    const result = [];
    for (const bankNote in bankNotesIssued) {
        if (bankNotesIssued[bankNote] > 0) {
            limits[bankNote] -= bankNotesIssued[bankNote];
            result.push(bankNotesIssued[bankNote] + 'x' + bankNote);
        }        
    }

    return result.reverse().join(' ');
}



atm(1250, limits) // '1x1000 2x100 1x50'
atm(100000, limits) // 'Error'
atm(2400, limits) // '2x1000 4x100'
atm(6512, limits) // 'Error'