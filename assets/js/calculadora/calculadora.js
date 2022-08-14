const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {

    constructor(previousOperandTextElement,currentOperandTextElement) {

        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    }

    formatDisplayNumber(number) {

        const stringNumber = number.toString();

        const integerDigits =  parseFloat(stringNumber.split('.')[0]);
        const decimalDigits =  stringNumber.split('.')[1];

        let intergerDisplay;

        if(isNaN(integerDigits)) {
            intergerDisplay = '';
        }

        else {
            intergerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0,   
            })
        }

        if(decimalDigits != null) {
            return `${intergerDisplay}.${decimalDigits}`;
        }

        else {
            return intergerDisplay;
        }

    }

    calculate() {

        let result;
        const previousOperandFloat = parseFloat(this.previousOperand);
        const currentOperandFloat = parseFloat(this.currentOperand);

        if(isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

        switch (this.operation) {
            case '+':
                result = previousOperandFloat + currentOperandFloat;
                break;
            case '-':
                result = previousOperandFloat - currentOperandFloat;
                break;
            case '÷':
                result = previousOperandFloat / currentOperandFloat;
                break;
            case '×':
                result = previousOperandFloat * currentOperandFloat;
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
         
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    chooseOperation(operation) {

        if(this.currentOperand == '') return;

        if(this.previousOperand != '') {
            this.calculate();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    appendNumber(number) {
        if(this.currentOperand.includes('.') && number == '.') return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    renderDisplay() {
        this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation || ''}`;
        this.currentOperandTextElement.innerText = this.formatDisplayNumber(this.currentOperand);
    }

}

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText)
        calculator.renderDisplay();
    })
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
        calculator.chooseOperation(operationButton.innerText)
        calculator.renderDisplay();
    })
}

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.renderDisplay();
});

equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.renderDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.renderDisplay();
});