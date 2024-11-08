let unit = document.querySelector("#unit");
let conversor_result = document.querySelector("#conversor_result");
let reference_values = document.querySelector('.reference_values');
let reference_values_label = document.querySelectorAll('.reference_values label');
let reference_values_inputs = document.querySelectorAll('.reference_values input');

unit.onchange = function() {

   let label_value1 = reference_values_label[0]
   let label_value2 = reference_values_label[1]

    switch (unit.selectedIndex){
        case 0:
            reference_values.hidden = true;
            break;
        case 1:
            reference_values.hidden = false;
            label_value1.innerHTML = "DPI do Monitor (Padrão 96)";
            label_value2.innerHTML = "DPI da Impressora (Padrão 72)";
            break;
    }
}

function convert() {
    let unit_value = unit.value
    let inserted_value = document.querySelector("#inserted_value").value;
    let reference_values1 = reference_values_inputs[0].value;
    let reference_values2 = reference_values_inputs[1].value;

    switch (unit_value) {
        case 'px':
            conversor_result.innerHTML = `${inserted_value}${unit_value} em ${unit_value} é igual a ${inserted_value}${unit_value}`;
            break;
        case 'pt':
            reference_values.hidden = false;
            conversor_result.innerHTML = `${inserted_value}${unit_value} em px é igual a ${inserted_value * reference_values1/reference_values2} px`;
            break;        
    }
    
}