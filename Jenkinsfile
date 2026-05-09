node {
    def nodeImage = docker.image('node:16-buster-slim')

    stage('Checkout') {
        checkout scm
    }

    nodeImage.inside('-p 3000:3000') {
        
        stage('Build') {
            sh 'npm install'
        }

        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }

        stage('Manual Approval') {
            input message: 'Apakah semua test sudah berjalan dengan baik? (Klik "Proceed" untuk melanjutkan ke tahap deploy)'
        }

        stage('Deploy') {
            sh './jenkins/scripts/deliver.sh'
            
            // Sleep 60 detik (1 menit) agar bisa localhost:3000
            sleep time: 1, unit: 'MINUTES'
            
            sh './jenkins/scripts/kill.sh'
        }
    }
}