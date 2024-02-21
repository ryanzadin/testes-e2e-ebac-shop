pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'ci', url: 'https://github.com/EBAC-QE/testes-e2e-ebac-shop.git'
                bat 'npm install'

            }
        }       
        
        stage('Test') {
            steps {
                bat 'set NO_COLOR=1 npm run cy:run'
            }
        }
    }
}