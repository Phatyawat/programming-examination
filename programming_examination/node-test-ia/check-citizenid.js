function checkCitizenId(request, response) {
    let citizenId = request.query.citizen_id

    let result = checkCitizen(citizenId)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(result))

}

function checkCitizen(citizenId) {

    let result = {
        success: false,
        error_code: "001",
        error_msg: "citizen_id invalid"
    }

    if (citizenId.length == 0) {
        result.error_msg = "citizen_id required"
        return result
    } else if (citizenId.length != 13) {
        return result
    } else if (checkByFormula(citizenId)) {
        result.success = true
        result.error_code = "200"
        result.error_msg = ""
    }
    return result
}

function checkByFormula(citizenId) {
    let last = parseInt(citizenId[citizenId.length - 1])
    result = 0

    for (i = 0; i < citizenId.length - 1; i++) {
        let stepTwo = parseInt(citizenId[i]) * (13 - i)
        result = result + stepTwo
    }

    let stepThird = result
    let stepFourth = stepThird % 11
    let stepFifth = 11 - stepFourth

    if (stepFifth.toString().length > 1) {
        stepFifth = parseInt(stepFifth[1])
    }

    return stepFifth == last
}

module.exports = checkCitizenId