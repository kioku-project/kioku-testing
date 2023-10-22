kubectl create namespace locust

kubectl create configmap -n locust locust-configmap --from-file=locust-tasks/

kubectl apply -n locust -f k8s/