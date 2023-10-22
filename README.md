<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/kioku-project/kioku/assets/71837281/62942574-34ef-4e75-9b17-9721444f9d74">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/kioku-project/kioku/assets/60541979/1f827df3-5882-4285-913f-47f04b26196b">
  <img alt="Kioku banner" src="">
</picture>

# Kioku Testing

This repository contains testing resources that are different from e.g. unit-tests.

## Load-Testing

For every following command under this section, it is assumed that your current working directory is the `load-testing` folder.

### Local

In order to execute the Load-Testing framework locally, you need to install [`locust`](https://docs.locust.io/en/stable/installation.html).
Once you have installed it, you can run the framework with the Kioku tests using:

`cd locust-tasks && locust`

### Kubernetes

You can also run the load-testing using a Kubernetes cluster. You can deploy it using:

`./run.sh`

To access the dashboard, you can forward the port of the master-service using:

`kubectl port-forward -n locust deployment/locust-master 8089`

After that, the dashboard will be accessible from [`localhost:8089`](http://localhost:8089)