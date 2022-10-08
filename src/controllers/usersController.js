const AppError = require('../utils/appError')



class usersController {
    /*
        * index - GET para listar registros
        * show - GET para exibir um registro especifico
        * create - POST para criar um registro
        * update - PUT para atualizar um registro  
        * delete - DELETE para remover um registro
     */
    create(request, response){
        const {name, email, password} = request.bodyxxxx

        if(!name){
            throw new AppError("O nome é obrigatório")
        }


        response.status(201).json({name, email, password})
    }
};


module.exports = usersController;