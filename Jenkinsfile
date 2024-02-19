pipeline {
    agent any 

         stages {
             stage('Executar testes'){
                steps{
                    sh 'NO_COLOR=1 npm run cy:run'
                }
            }     


        }
    }