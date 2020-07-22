import React, {useState} from 'react';
import Slider from 'react-input-slider';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

function CiInsuranceCalculator() {
    const [dri, setDri] = useState({ x: 0 });
    const [ohe, setOhe] = useState({ x: 0 });
    const [hme, setHme] = useState({ x: 0 });
    const [mhe, setMhe] = useState({ x: 0 });
    const [oe, setOe] = useState({ x: 0 });
    const [rp, setRp] = useState({ x: 6 });

    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

    let Data = {
        "chart": {
          "xAxisName": "Assumptions",
          "numberSuffix": "K",
          "numberPrefix": "$",
          "theme": "fusion",
        },
        "data": [
          {
            "label": "Estimated Cost today",
            "value": `${(dri.x + ohe.x + hme.x + mhe.x) - oe.x}`
            
          },
          {
            "label": "Estimated Cost in 10 years",
            "value": `${((dri.x + ohe.x + hme.x + mhe.x + oe.x) * 1.2)/rp.x}`
          }
        ]
      }

      const chartConfigs = {
        type: 'column2d',
        width: "100%",
        height: 400,
        dataFormat: 'json',
        dataSource: Data ,
      };

    return (
        <React.Fragment>
            <div className="container text-center">
                <h1>Critical Illness Insurance Calculator</h1>
                <p>Adjust the sliders to estimate the coverage amount you may need.</p>
                <div className="row">
                    <div className="col-4 text-left">
                        <div>
                        <label>Desired replacement income (after-tax)<i className="icon-info-sign"></i></label>                        
                            <div className="box">
                                <div>
                                $ {dri.x}
                                </div>
                                <div className="float-right">
                                /month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            axis="x"
                            xstep={100}
                            xmin={0}
                            xmax={2500}
                            x={dri.x}
                            onChange={({ x }) => setDri({ x: parseFloat(x.toFixed(2)) })}
                            />
                        </div>

                        <div>
                        <label>Out-of-pocket healthcare expenses<i className="icon-info-sign"></i></label>                        
                            <div className="box">
                                <div>
                                $ {ohe.x}
                                </div>
                                <div className="float-right">
                                /month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            axis="x"
                            xstep={100}
                            xmin={0}
                            xmax={2500}
                            x={ohe.x}
                            onChange={({ x }) => setOhe({ x: parseFloat(x.toFixed(2)) })}
                            />
                        </div>

                        <div>
                        <label>Home modification expenses<i className="icon-info-sign"></i></label>                        
                            <div className="box">
                                <div>
                                $ {hme.x}
                                </div>
                                <div className="float-right">
                                /month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            axis="x"
                            xstep={100}
                            xmin={0}
                            xmax={2500}
                            x={hme.x}
                            onChange={({ x }) => setHme({ x: parseFloat(x.toFixed(2)) })}
                            />
                        </div>

                        <div>
                        <label>Medical homecare expenses<i className="icon-info-sign"></i></label>                        
                            <div className="box">
                                <div>
                                $ {mhe.x}
                                </div>
                                <div className="float-right">
                                /month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            axis="x"
                            xstep={100}
                            xmin={0}
                            xmax={2500}
                            x={mhe.x}
                            onChange={({ x }) => setMhe({ x: parseFloat(x.toFixed(2)) })}
                            />
                        </div>

                        <div>
                        <label>Other expenses (transport, childcare, etc)<i className="icon-info-sign"></i></label>
                            <div className="box">
                                <div>
                                $ {oe.x}
                                </div>
                                <div className="float-right">
                                /month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            classes="slider"
                            axis="x"
                            xstep={100}
                            xmin={0}
                            xmax={2500}
                            x={oe.x}
                            onChange={({ x }) => setOe({ x: parseFloat(x.toFixed(2)) })}
                            />
                        </div>
                        <label>Additional Info</label> <i className="fa fa-plus-square-o"></i>
                    </div>
                    <div className="col-8">
                        <div className="Box">
                            <div className="container">
                                <div className="row">
                                <div className="col-6">
                                <i className="fa fa-plus-circle"></i><p>Recovery Period<i className="icon-info-sign"></i></p>
                                </div>
                                <div className="col-6 center">
                                <div className="box text-left">
                                <div>
                                {rp.x}
                                </div>
                                <div className="float-right">
                                month
                                </div>                                
                            </div>
                            <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#17B3E4'
                                  },
                                thumb: {
                                  backgroundColor: "#17B3E4",
                                  width: 10,
                                  height: 10
                                }
                              }}
                            classes="slider"
                            axis="x"
                            xstep={1}
                            xmin={6}
                            xmax={36}
                            x={rp.x}
                            onChange={({ x }) => setRp({ x: parseFloat(x.toFixed(2)) })}
                            />
                                </div>
                                </div>
                            </div>
                        </div>
                        <ReactFC className="mt-3" {...chartConfigs} />
                        <p className="p-5">A serious illness with recovery lasting <span className="highlight">12 months</span> could put your finances down by $359,000 today and by $467,000 in 10 years.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CiInsuranceCalculator
