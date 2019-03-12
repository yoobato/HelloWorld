import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList: [],
            chartData: [['Name', 'Manager ID']]
        };
    };

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios.get('http://localhost:8000/api/members/')
            .then(res => this.setState({ memberList: res.data }))
            .catch(err => console.log(err));
        this.convertMemberListToChartData()
    };
    convertMemberListToChartData = () => {
        // TODO: MemberList -> ChartData 로 변환

        this.setState({
            chartData: [
                        ['Name', 'Manager ID'],
                        [
                            {
                                v: 'Mike',
                                f: 'Mike<div style="color:red; font-style:italic">President</div>',
                            },
                            ''
                        ],
                        [
                            {
                                v: 'Jim',
                                f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
                            },
                            'Mike',
                        ],
                        ['Alice', 'Mike'],
                        ['Bob', 'Jim'],
                        ['Carol', 'Bob'],
                    ]
        });
    };

    render() {
        return (
            <main className="content">
                <h1 className="chart-title">얼리브 크루 조직도</h1>

                <Chart
                    width={'100%'}
                    height={350}
                    chartType="OrgChart"
                    loader={<div>조직도를 로딩하는 중입니다...</div>}
                    data={this.state.chartData}
                    options={{
                        allowHtml: true,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </main>
        );
    };
}

export default App;
