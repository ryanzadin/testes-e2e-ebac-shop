pipeline {
    agent any 

         stages {
             stage('Executar testes'){
                scripts: {
                    sh 'NO_COLOR=1 npm run cy:run'
                      }
                    }     


        }
    }