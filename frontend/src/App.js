import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [['Name', 'Manager ID']],
        };
    };

    componentDidMount() {
        this.fetchMemberList();
    }

    fetchMemberList = () => {
        axios.get('http://localhost:8000/api/organization/members/')
            .then(res => this.makeChartData(res.data))
            .catch(err => console.log(err));
    };
    makeChartData = (memberList) => {
        let chartData = [['Name', 'Manager ID']];
        memberList.forEach((member) => {
            chartData.push([
                {
                    v: member.id.toString(),
                    f: member.name + '<div style="color: blue; font-style: italic">' + member.job_title + '</div>',
                },
                (member.manager_id ? member.manager_id.toString() : ''),
            ]);
        });
        this.setState({ chartData: chartData });
    };

    render() {
        return (
            <main className="content">
                <h1 className="chart-title">얼리브 크루 조직도</h1>

                <Chart
                    width={'100%'}
                    height={600}
                    chartType="OrgChart"
                    loader={<div style={{ "text-align": "center", "color": "white" }}>조직도를 로딩하는 중입니다...</div>}
                    data={this.state.chartData}
                    options={{
                        allowCollapse: true,
                        allowHtml: true,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </main>
        );
    };
}

export default App;
