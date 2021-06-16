fetch('https://api.covid19india.org/data.json').then((response) => { //api->response->fetching data from api
                    response.json().then((data) => {
                        let datalist = data.statewise;
                        let state = (datalist.map(i => i.state)).slice(1);//array
                        let death = (datalist.map(i => i.deaths)).slice(1);
                        console.log(state);
                        console.log(death);
                        var data = [{
                            x: state,
                            y: death,
                            type: "bar"
                        }];
                        var layout = {
                            title: "Covid 19 Death Rate"
                        };

                        Plotly.newPlot("disdis", data, layout);//package 
                    })
                })