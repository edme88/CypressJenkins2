pipeline {
    agent any

    tools {nodejs 'node'}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test Execution in Desktop') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                sh 'npx cypress run --e2e --browser chrome'}
            }
        }
        stage('Generate Log Report in the console') {
            steps {
                sh 'node generateLogReport.js'
            }
        }
}
