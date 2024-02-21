pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'ci', url: 'https://github.com/EBAC-QE/testes-e2e-ebac-shop.git'
                sh 'npm install'

            }
        }       
        
        stage('Test') {
            steps {
                sh 'set NO_COLOR=1 npm run cy:run'
            }
        }
    }
}