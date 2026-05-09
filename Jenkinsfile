pipeline {
    agent {
        docker {
            image 'node:16-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
                input message: 'Apakah semua test sudah berjalan dengan baik? (Klik "Proceed" untuk melanjutkan ke tahap deploy)'
            }
        }
        stage('Deploy') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                sleep 60
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}