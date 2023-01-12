function findArea(request, response){
   let base = request.query.base
   let height = request.query.height

   let result = { area:0 }
    
   let area = (base*height)/2;

   result.area = area

   response.setHeader('Content-Type', 'application/json');
   response.end(JSON.stringify(result))

}

module.exports = findArea