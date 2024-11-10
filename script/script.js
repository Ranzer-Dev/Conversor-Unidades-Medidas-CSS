let unit = document.querySelector("#unit");
let conversor_result = document.querySelector("#conversor_result");
let reference_values = document.querySelector('.reference_values');
let reference_values_label = document.querySelectorAll('.reference_values label');
let reference_values_inputs = document.querySelectorAll('.reference_values input');

unit.onchange = function () {

    let [label_value1, label_value2] = reference_values_label;
    let [input1, input2] = reference_values_inputs;
    
    switch (unit.selectedIndex) {
        case 0:
            reference_values.hidden = true;
            break;
        case 1:
            reference_values.hidden = false;
            input2.hidden = false;
            label_value2.hidden = false;
            label_value1.innerHTML = "DPI do Monitor (Padrão 96)";
            label_value2.innerHTML = "DPI da Impressora (Padrão 72)";
            break;
        case 2:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "DPI do Monitor (Padrão 96)";
            break;
        case 3:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "DPI do Monitor (Padrão 96)";
            break;
        case 4:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "DPI do Monitor (Padrão 96)";
            break;
        case 5:
            reference_values.hidden = true;
            break;
        case 6:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "Tamanho da fonte do elemento pai";
            break;
        case 7:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "Tamanho da fonte do elemento pai";
            break;
        case 8:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "Tamanho do elemento pai(width, largura ou height, altura)";
            break;
        case 9:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "largura da janela do navegador";
            break;
        case 10:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "altura da janela do navegador";
            break;
        case 11:
            reference_values.hidden = false;
            input2.hidden = false;
            label_value2.hidden = false;
            label_value1.innerHTML = "altura da janela do navegador em px";
            label_value2.innerHTML = "largura da janela do navegador em px";
            break;
        case 12:
            reference_values.hidden = false;
            input2.hidden = false;
            label_value2.hidden = false;
            label_value1.innerHTML = "altura da janela do navegador em px";
            label_value2.innerHTML = "largura da janela do navegador em px";
            break;
        case 13:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            label_value1.innerHTML = "Tamanho da fonte do elemento Raiz (normalmente <Html>)";
            break;
        case 14:
            reference_values.hidden = false;
            input2.hidden = true;
            label_value2.hidden = true;
            input1.hidden = true;
            label_value1.innerHTML = "esta unidade não tem um valor padrão nem proximo de um padrão leia a formula para entender";
            break;
    }
}

function convert() {
    let unit_value = unit.value
    let inserted_value = document.querySelector("#inserted_value").value;
    let reference_values1 = reference_values_inputs[0].value;
    let reference_values2 = reference_values_inputs[1].value;
    let result = 0;
    let cm_to_inch = 2.54;
    let mm_to_inch = 25.4;

    switch (unit.selectedIndex) {
        case 0:
            result = inserted_value;
            break;
        case 1:
            result = (inserted_value * reference_values1 / reference_values2);
            break;
        case 2:
            result = (inserted_value * reference_values1 / cm_to_inch);
            break;
        case 3:
            result = (inserted_value * reference_values1 / mm_to_inch);
            break;
        case 4:
            result = (inserted_value * reference_values1);
            break;
        case 5:
            result = (inserted_value * 16.6667);
            break;
        case 6:
            result = (inserted_value * reference_values1 * 0.5);
            break;
        case 7:
            result = (inserted_value * reference_values1);
            break;
        case 8:
            result = (inserted_value * (reference_values1 / 100));
            break;
        case 9:
            result = (inserted_value * (reference_values1 / 100));
            break;
        case 10:
            result = (inserted_value * (reference_values1 / 100));
            break;
        case 11:
            result = (inserted_value * (Math.min(reference_values1, reference_values2))/100);
            break;
        case 12:
            result = (inserted_value * (Math.max(reference_values1, reference_values2))/100);
            break;
        case 13:
            result = (inserted_value * reference_values1);
            break;
    }

    conversor_result.innerHTML = `${inserted_value}${unit_value} em px é igual a ${result}px, numeros antes do "." são inteiros`;

}