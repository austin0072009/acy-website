import React from "react";
import axios from "axios";
import classNames from "classnames";
import style from "../css/exchange.css";
// 数字格式化
const  abbrNumber=(number)=> {
    const THOUSAND = 0;
    const MILLION = 1;
  
    let currentDivision = -1;
    let result = '';
    let tempNumber = number+"";
  
    if (number >= 1000) {
      tempNumber /= 1000;
      currentDivision = 0;
    }
  
    if (number >= 1000000) {
      tempNumber /= 1000;
      currentDivision = 1;
    }
  
    switch (currentDivision) {
      case 0:
        result = `${tempNumber.toFixed(2)}k`;
        break;
      case 1:
        result = `${tempNumber.toFixed(2)}m`;
        break;
      default:
        result = `${number.toFixed(4)}`;
        break;
    }
  
    return result;
  }
const CoinGeckoApi = {
    AllCoins: "/selectCurrencyPageListV2?pageNum=1&pageSize=30&linkId=4",
    Base: "https://tokeninsight.com/api/v2/currency"
}

const RequestStatus = {
    Error: "Error",
    Idle: "Idle",
    Loading: "Loading",
    Success: "Success"
}

const Color = {
    Green: "76, 175, 80",
    Red: "198, 40, 40"
}
const Chart = window.Chart || {};
const CryptoUtility = {
    formatPercent: (value) => {
        return (value / 100).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 });
    },
    formatUSD: (value) => {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    },
    getByID: (id, cryptos) => {
        const match = cryptos.find((crypto) => crypto.id === id);

        return match || null;
    },
    map: (data) => {
        
        return {
            change: data.changed1d,
            id: data.cid,
            image: data.imgUrl,
            marketCap: CryptoUtility.formatUSD(data.marketCap),
            name: data.name,
            price: CryptoUtility.formatUSD(data.price),
            rank: data.rank,
            supply: data.supply.toLocaleString(),
            symbol: data.name,
            volume: CryptoUtility.formatUSD(data.volume24h)
        }
    },
    mapAll: (data) => {
        return data.data.list.map((item) => CryptoUtility.map(item));
    }
}
const ChartUtility = {
    draw: (id, points, change) => {

        const canvas = document.getElementById(id);

        if (canvas !== null) {
            const context = canvas.getContext("2d");

            const {
                clientHeight: height,
                clientWidth: width
            } = context.canvas;

            context.stroke();

            return Chart&& new Chart(context, {
                type: "line",
                data: {
                    datasets: [{
                        data: points.map((point) => point.price),
                        ...ChartUtility.getDatasetOptions(change)
                    }],
                    labels: points.map((point) => point.timestamp)
                },
                options: ChartUtility.getOptions(points)
            })
        }
    },
    getDatasetOptions: (change) => {
        const color = change >= 0 ? Color.Green : Color.Red;

        return {
            backgroundColor: "rgba(" + color + ", 0.1)",
            borderColor: "rgba(" + color + ", 0.5)",
            fill: true,
            tension: 0.2,
            pointRadius: 0
        }
    },
    getOptions: (points) => {
        const min = Math.min.apply(Math, points.map((point) => point.price)),
            max = Math.max.apply(Math, points.map((point) => point.price));

        return {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: {
                    display: false,
                    gridLines: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    gridLines: {
                        display: false
                    },
                    suggestedMin: min * 0.993,
                    suggestedMax: max * 1.007
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            }
        }
    },
    getUrl: (id) => {
        return `${CoinGeckoApi.Base}/price/historyV2?cid=${id}&queryType=24`;
    },
    mapPoints: (data) => {
        return data.map((item) => ({
            price:item.price,
            timestamp: item.sourceTime
        }))
    },
    update: (chart, points, change) => {
        chart.options = ChartUtility.getOptions(points);

        const options = ChartUtility.getDatasetOptions(change);

        chart.data.datasets[0].data = points.map((point) => point.price);
        chart.data.datasets[0].backgroundColor = options.backgroundColor;
        chart.data.datasets[0].borderColor = options.borderColor;
        chart.data.datasets[0].pointRadius = options.pointRadius;

        chart.data.labels = points.map((point) => point.timestamp);

        chart.update();
    }
}
const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-wrapper">
            <div className="loading-spinner">
                <i className="fa-regular fa-spinner-third" />
            </div>
        </div>
    );
}
const CryptoListToggle = () => {
    const { state, toggleList } = React.useContext(AppContext);

    if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
        const classes = classNames(
            "fa-regular", {
            "fa-bars": !state.listToggled,
            "fa-xmark": state.listToggled
        });

        return (
            <button
                id="crypto-list-toggle-button"
                onClick={() => toggleList(!state.listToggled)}
            >
                <i className={classes} />
            </button>
        )
    }

    return null;
}
const CryptoListItem = (props) => {
    const { state, selectCrypto } = React.useContext(AppContext);

    const { crypto } = props;

    const getClasses = () => {
        const selected = state.selectedCrypto && state.selectedCrypto.id === crypto.id;

        return classNames(
            "crypto-list-item", {
            selected
        });
    }
    const sign = crypto.change >= 0 ? "positive" : "negative";
    return (
        <button type="button" className={getClasses()} onClick={() => selectCrypto(crypto.id)}>
            <div className="crypto-list-item-background">
                {/* <h1 className="crypto-list-item-symbol">{crypto.symbol}</h1> */}
                {/* <img className="crypto-list-item-background-image" src={crypto.image} /> */}
            </div>
            <div className="crypto-list-item-content">
                <h1 className="crypto-list-item-rank">{crypto.rank}</h1>
                <img className="crypto-list-item-image" src={crypto.name=="Tether"&&"/usdt.svg"||crypto.image} />
                <div className="crypto-list-item-details">
                    <h1 className="crypto-list-item-name">{crypto.name}</h1>
                    <h1 className="crypto-list-item-price">
                        {crypto.price}&nbsp;&nbsp;
                        <span className={classNames(sign)}>
                            {CryptoUtility.formatPercent(crypto.change)}
                        </span>
                    </h1>
                </div>
                
            </div>
        </button>
    );
}

const CryptoList = () => {
    const { state } = React.useContext(AppContext);

    if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
        const getItems = () => {
            return state.cryptos.map((crypto) => (
                <CryptoListItem key={crypto.id} crypto={crypto} />
            ));
        }

        return (
            <div id="crypto-list">
                {getItems()}
            </div>
        );
    }

    return null;
}
const CryptoField = (props) => {
    return (
        <div className={classNames("crypto-field", props.className)}>
            <h1 className="crypto-field-label">{props.label}</h1>
            <h1 className="crypto-field-value">{props.value}</h1>
        </div>
    );
}
const CryptoPriceChart = () => {
    const { selectedCrypto: crypto } = React.useContext(AppContext).state;

    const id = "crypto-price-chart";

    const [state, setStateTo] = React.useState({
        chart: null,
        points: [],
        status: RequestStatus.Loading
    });

    const setStatusTo = (status) => {
        setStateTo({ ...state, status });
    }

    const setChartTo = (chart) => {
        setStateTo({ ...state, chart });
    }

    React.useEffect(() => {
        const fetch = async () => {
            try {
                setStatusTo(RequestStatus.Loading);

                const res = await axios.post(ChartUtility.getUrl(crypto.id));
                setStateTo({
                    ...state,
                    points: ChartUtility.mapPoints(res.data.data),
                    status: RequestStatus.Success
                });
            } catch (err) {
                console.error(err);

                setStatusTo(RequestStatus.Error);
            }
        }

        fetch();
    }, [crypto]);

    React.useEffect(() => {

        if (state.chart === null && state.status === RequestStatus.Success) {
            setChartTo(ChartUtility.draw(id, state.points, crypto.change));
        }
    }, [state.status]);

    React.useEffect(() => {
        if (state.chart !== null) {
            const update = () => ChartUtility.update(state.chart, state.points, crypto.change);

            update();
        }
    }, [state.chart, state.points]);

    const getLoadingSpinner = () => {
        if (state.status === RequestStatus.Loading) {
            return (
                <div id="crypto-price-chart-loading-spinner">
                    <LoadingSpinner />
                </div>
            );
        }
    }

    return (
        <div id="crypto-price-chart-wrapper">
            <canvas id={id} />
            {getLoadingSpinner()}
        </div>
    );
}


const CryptoDetails = () => {
    const { selectedCrypto } = React.useContext(AppContext).state;

    const [state, setStateTo] = React.useState({
        crypto: null,
        transitioning: true
    });

    const setTransitioningTo = (transitioning) => {
        setStateTo({ ...state, transitioning });
    }

    const { crypto } = state;

    React.useEffect(() => {
        if (selectedCrypto !== null) {
            setTransitioningTo(true);

            const timeout = setTimeout(() => {
                setStateTo({ crypto: selectedCrypto, transitioning: false });
            }, 500);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [selectedCrypto]);

    if (crypto !== null) {
        const sign = crypto.change >= 0 ? "positive" : "negative";

        return (
            <div id="crypto-details" className={classNames(sign, { transitioning: state.transitioning })}>
                <div id="crypto-details-content">
                    {/* <div id="crypto-fields"> */}
                        {/* <CryptoField label="Rank" value={crypto.rank} />
                        <CryptoField label="Name" value={crypto.name} /> */}

                        {/* <div>
                            <CryptoField label="Price" value={crypto.price} />
                            <CryptoField
                                className={sign}
                                label="24H Change"
                                value={CryptoUtility.formatPercent(crypto.change)}
                            />
                            <CryptoField label="24H Volume" value={crypto.volume} />
                            <CryptoField label="Market Cap" value={crypto.marketCap} />
                        </div> */}
                    {/* </div> */}
                    <CryptoPriceChart />
                    {/* <h1 id="crypto-details-symbol">{crypto.symbol}</h1> */}
                </div>
            </div>
        );
    }

    return null;
}
const AppContext = React.createContext(null);
const Page = () => {
    const [state, setStateTo] = React.useState({
        cryptos: [],
        listToggled: true,
        selectedCrypto: null,
        status: RequestStatus.Loading
    });

    const setStatusTo = (status) => {
        setStateTo({ ...state, status });
    }

    const selectCrypto = (id) => {
        setStateTo({
            ...state,
            listToggled: window.innerWidth > 800,
            selectedCrypto: CryptoUtility.getByID(id, state.cryptos)
        });
    }

    const toggleList = (listToggled) => {
        setStateTo({ ...state, listToggled });
    }

    React.useEffect(() => {
        const fetch = async () => {
            try {
                setStatusTo(RequestStatus.Loading);

                const res = await axios.post(`${CoinGeckoApi.Base}/${CoinGeckoApi.AllCoins}`);

                setStateTo({
                    ...state,
                    cryptos: CryptoUtility.mapAll(res.data),
                    status: RequestStatus.Success
                });
            } catch (err) {
                console.error(err);

                setStatusTo(RequestStatus.Error);
            }
        }

        fetch();
    }, []);

    React.useEffect(() => {
        if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
            selectCrypto(state.cryptos[0].id);
        }
    }, [state.status]);

    const getLoadingSpinner = () => {
        if (state.status === RequestStatus.Loading) {
            return (
                <LoadingSpinner />
            );
        }
    }

    return (
        <AppContext.Provider value={{ state, selectCrypto, setStateTo, toggleList }}>
            <div id="app" className={classNames({ "list-toggled": state.listToggled })}>
                <CryptoList />
                <CryptoDetails />
                <CryptoListToggle />
                {getLoadingSpinner()}
                <div className="boxs">
                    <div className="boxs_x">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="boxs_y">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="ft">
                    <span><a href="/about">About</a></span>
                    <span><a target="_blank" href="https://github.com/ACY-Labs">GitHub</a></span>
                    <span><a target="_blank" href="https://docs.google.com/document/d/1tfGj9AOgvZxBNRg1hzQeb6E3t1dj1aKFMhh6nL5ukDY/edit?usp=sharing">Docs</a></span>
                    <span><a target="_blank" href="https://www.twitter.com/ACYFinance">Twitter</a></span>
                    <span><a target="_blank" href="https://t.me/acyfinance">Telegram</a></span>
                    <span><a target="_blank" href="https://www.medium.com/acy-finance">Medium</a></span>
                    <span><a target="_blank" href="https://www.linkedin.com/company/acy-finance">Youtube</a></span>
                    
                </div>
            </div>
        </AppContext.Provider>
    )
}
export default Page;