pipeline {
    agent any
    triggers {
        cron '0 0 * * 7'
    }

    stages {
        stage('Clone Repo'){
            steps{
                git branch: 'main', url: 'https://github.com/edme88/CypressJenkins2.git'
            }
        }
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