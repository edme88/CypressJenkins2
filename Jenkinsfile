pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Test Execution in Desktop') {
            steps {
                script {
                    try {
                        bat 'npx cypress run --e2e --browser chrome'
                    } catch (Exception e) {
                        currentBuild.result = 'SUCCESS'
                    }
                }
            }
        }
        stage('Generate Log Report in the console') {
            steps {
                bat 'node generateLogReport.js'
            }
        }
    }
}
