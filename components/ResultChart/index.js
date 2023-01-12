import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart } from "react-native-chart-kit";

export const ResultChart = ({ propositions, votes }) => {
    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const data = {
        labels:labels,
        datasets:[
            {
                data:datasets
            }
        ]
    };

    useEffect(() => {
        setLabels([]);
        setDatasets([]);
        propositions.map(prop => {
            let dataValue = 0;
            votes.map(vote => {
                vote.restaurant ===prop.restaurant ? dataValue+=1:null;
            })
            setLabels(labels => [...labels, prop.restaurant]);
            setDatasets(datasets => [...datasets, dataValue]);
        })
    }, [propositions, votes])

  return (
    <View>
        <BarChart
            style={{
                borderRadius: 16
              }}
            data={data}
            width={Dimensions.get("window").width}
            height={500}
            chartConfig={{
                backgroundColor: "rgba(255, 0, 0, 0)",
                backgroundGradientFrom: "rgba(255, 0, 0, 0)",
                backgroundGradientTo: "rgba(255, 0, 0, 0)",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: () => `rgba(0, 0, 0, 1)`,
                labelColor: () => `rgba(0, 0, 0, 1)`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
            fromZero
            verticalLabelRotation={0}
        />
    </View>
  )
}