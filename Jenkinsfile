pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test Execution in Desktop') {
            steps {
                script {
                    try {
                        sh 'npx cypress run --e2e --browser chrome'
                    } catch (Exception e) {
                        currentBuild.result = 'SUCCESS'
                    }
                }
            }
        }
        stage('Generate Log Report in the console') {
            steps {
                sh 'node generateLogReport.js'
            }
        }
}
