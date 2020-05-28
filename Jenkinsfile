pipeline {
    agent any
	
    environment{
        JENKINS_NODE_COOKIE = 'dontkillme'
        PORT=5000
        HOME = '.'
    }
    stages {
        stage('Preparation') { // for display purposes
            steps {
              // clean out the workspace
              cleanWs()
            }
        }        
        stage('Download') {
           steps {
              // Download code from a GitHub repository
              // branch: the branch that you want to build
              // credentialsId: the ID of the credentials for your GitLab repo that is being managed by Jenkins
              // url: url to your repo
              git branch: 'master', credentialsId:'a1a5be2d-10cb-41f1-8f22-2f03e7c3d41d', url:'https://github.com/TharindraParanagama/ProjectZeroGitHub.git'
           }
        }
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
 
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances of the app if applicable
                        sh 'kill $(lsof -t -i:$PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was not already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                    // start the application server
                    // the nohup means that we want to log the output to a file instead
                    sh 'nohup npm start &'
                }
            }
        }
    }
}
