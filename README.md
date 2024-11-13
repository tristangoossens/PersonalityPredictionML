<div align="center">
    <figure>
        <img src="./assets/logo-good.png"/>
        <img src="./assets/logo-evil.png"/>
    </figure>
    <h1><b>16 Personalities human centric AI design</b></h1>
    <small>A Human-Centered AI application that provides ethical insights into how design choices can change user behaviour in context of AI (bad and good app).</small>
</div>

## **Description**
This repository contains the code for my 16 Personalities human centric AI design project. It contains notebooks for exploring the data and making the machine learing model. It also uses this model inside the 3 core applications. A FastAPI client serves the model and the quiz questions. The "good" and "evil" applications are the front-end applications that use the FastAPI client to serve the model and the quiz questions. The "good" application is designed to be user-friendly and ethical, while the "evil" application is designed to be user-hostile and unethical.

## **Notebooks**
To see how the data was prepared and the model was made, you can check the following notebooks:

1. [Exploration and data preperation](./notebooks/1.%20Eploration%20and%20data%20preperation.ipynb)
2. [ANN Modeling and evaluation](./notebooks/2.%20ANN%20Modeling%20and%20evalutation.ipynb)

## **Installation**
To install the project, you need to have [Docker](https://www.docker.com) installed on your machine. Then you can run the following command to build the project.

```bash
docker-compose up --build
```

> Then navigate to `http://localhost:3000` to view the good application  
> And navigate to `http://localhost:4000` to view the evil application  
> API Docs are available at `http://localhost:8000/docs`

## **Sources**
[Personalities dataset](https://www.kaggle.com/datasets/anshulmehtakaggl/60k-responses-of-16-personalities-test-mbt)