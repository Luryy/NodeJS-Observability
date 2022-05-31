<h1 align="center">NodeJS-Observability :bar_chart: </h1>

_This project have a complete Observability setup for a NodeJS application. Using Grafana, Prometheus and Loki the project results is below:_

![dashboard-gift](https://user-images.githubusercontent.com/59494158/171276053-9f16318c-7125-4e77-a134-4f5d42843a5e.gif)

### Starting

You should have [docker-compose](https://docs.docker.com/compose/install/) installed


- Clone the project:
```
git clone https://github.com/Luryy/NodeJS-Observability.git
```

- Start the infra:
```
docker-compose up
```

_*your project is running_


### Metrics configuration

- Access ```localhost:3333``` to login at **Grafana** ```user=admin password=12345```
- Configure **Prometheus** Data Source at Grafana - param: ```URL=http://prometheus:9090```
- Configure **Loki** Data Source at Grafana - param: ```URL=http://loki:3100```
- Import [NodeJsDahsboard.json](https://github.com/Luryy/NodeJS-Observability/blob/master/docker/backup/grafana/NodeJsDahsboard.json) present in this project to create a new metrics dashboard

_*your metrics is configured_

### Usage

The API ```localhost:3000``` have 4 endpoints
  - **/success** - returns 200
  - **/delay** - returns 200 after 3 seconds
  - **/error** - returns 400
  - **/leak** - generate memory leaks

Make requests to API endpoints and follow the metrics dashboard and logs!


### Dashboards Screenshots

![health-metrics](https://user-images.githubusercontent.com/59494158/171277420-c3365fb0-d950-44f4-a9e1-96ce39f43334.png)

![requests-metrics](https://user-images.githubusercontent.com/59494158/171277470-60521fdd-2eff-4f71-860b-430279f8f73b.png)

![logs](https://user-images.githubusercontent.com/59494158/171277490-b4dda0d4-1dde-42af-b7c3-450439615a7e.png)

### Architecture

![architecture](https://user-images.githubusercontent.com/59494158/171280047-4425cc63-7e61-4d7b-b1c4-1117f4f8fbd3.png)


## Autor


👤 **Lucas Yuri**

- Github: [Luryy](https://github.com/luryy)
- LinkedIn: [Lucas Yuri](https://linkedin.com/in/lucas-yuri)


## 📝 License

Copyright © 2022 [Lucas Yuri](https://github.com/luryy).
This project is [MIT](LICENSE) licensed.
