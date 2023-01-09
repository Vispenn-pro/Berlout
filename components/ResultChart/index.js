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
                marginVertical: 8,
                borderRadius: 16
              }}
            data={data}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
            verticalLabelRotation={30}
        />
    </View>
  )
}