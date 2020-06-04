pipeline {
    agent any
	
    environment{
        JENKINS_NODE_COOKIE = 'dontkillmeplease'
        PORT=5000
        MESSAGE='secret'
    }
    stages {
        stage('Preparation') { // for display purposes
            steps {
              // clean the workspace
              cleanWs()
            }
        }        
        stage('Download') {
           steps {
              // Download code from a GitHub repository
              git branch: 'master', credentialsId: 'a092822c-5a98-4ee7-9fcc-885ef8363fef', url: 'https://github.com/TharindraParanagama/ProjectZeroGitHub.git'
           }
        }
        stage('Install node modules'){
            steps{
                sh 'npm install'
            }

        }
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances
                        sh 'kill $(lsof -t -i:$PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                    sh 'nohup npm start &'
                }
            }
        }
    }
}
