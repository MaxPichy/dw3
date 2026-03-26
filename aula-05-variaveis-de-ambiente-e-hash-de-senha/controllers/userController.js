import userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

// Configurando o dotenv
dotenv.config();
const JWTSecret = process.env.JWTSecret;

// Segredo para gerar o token da API
// const JWTSecret = 'thegames-secret'; <- segredos são lançados no .env

const createUser = async(req, res) => {
    try{
        const {name, email, password} = req.body;

        // Gerando o hash de senha
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        await userService.Create(name, email, hash);
        res.status(201).json({message: 'Usuário cadastrado com sucesso.'});
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Não foi possível cadastrar o usuário. Erro interno do servidor.'});
    }
}

// Função para AUTENTICAR um usuário (Função de login)
const loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        
        // Se o email existe
        if(email != undefined){
            // Buscando o usuário no banco
            const user = await userService.getOne(email);

            // Se o usuário for encontrado
            if(user != undefined){
                // Verificando o hash de senha
                const correct = bcrypt.compareSync(password, user.password);

                // Verificando se o hash foi validado
                if(correct){
                    // CRIAR O TOKEN
                    jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
                            // Falha
                        if(error){
                            res.status(400).json({error: 'Não foi possível gerar o token de autenticação.'});
                        } else{
                            // Sucesso
                            res.status(200).json({message: 'Login realizado com sucesso!', token: token});
                        }
                    });
                } else{
                    res.status(401).json({error: 'Suas credenciais são inválidas. Acesso negado.'});
                    // 401 - UNAUTHORIZED
                }
            } else{
                res.status(404).json({error: 'O usuário informado não foi encontrado.'});
            }
        } else{
            res.status(404).json({error: 'Email inválido ou não informado.'});
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Não foi possível realizar o login. Erro interno do servidor.'})
    }
}

export default {createUser, loginUser, JWTSecret};