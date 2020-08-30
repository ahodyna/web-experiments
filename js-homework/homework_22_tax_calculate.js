$(document).ready(function () {

    let financialData = []


    $('#addSectionButton').on('click', function addSection() {

        let $monthInput = $('#monthInput')
        let month = $monthInput.val()

        let $salaryInput = $('#salaryInput')
        let salary = $salaryInput.val()

        let $exchangeRateInput = $('#exchangeRateInput')
        let exchangeRate = $exchangeRateInput.val()

        let $withdrawСashInput = $('#withdrawСashInput')
        let withdrawСash = $withdrawСashInput.val()

        let record = {
            "month": month,
            "salary": salary,
            "exchangeRate": exchangeRate,
            "withdrawСash": withdrawСash
        }
        financialData.push(record)

        let tax = salary * exchangeRate * 0.05;

        let rowsAmount = $('#smetaTableBody tr').length
        let $tableRow = $("<tr id=row" + rowsAmount + ">" +
            "<td>" + month + "</td>" +
            "<td>" + salary + "</td>" +
            "<td>" + exchangeRate + "</td>" +
            "<td>" + withdrawСash + "</td>" +
            "<td id='tax" + rowsAmount + "'>" + tax + "</td>" +
            "<td ></td>" +
            "<td></td>" +
            "</tr>");
        $tableRow.on('mouseover', function highlightButton() {
            $tableRow.addClass("highlightedRow")
        })
        $tableRow.on('mouseleave', function highlightButton() {
            $tableRow.removeClass("highlightedRow")
        })

        $("#smetaTableBody").append($tableRow);



        $monthInput.val('');
        $salaryInput.val('');
        $exchangeRateInput.val('');
        $withdrawСashInput.val('')


    });

    $('#countButton').on('click', function calculate() {
        
        for(let i = 0; i < financialData.length; i++){
           
            $('#tax' + i).html(null)
        }
        console.log(financialData)
    })

})