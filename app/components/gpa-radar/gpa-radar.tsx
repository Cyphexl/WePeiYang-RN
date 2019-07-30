import * as React from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { color, typography } from "../../theme"
import { VictoryChart, VictoryGroup, VictoryArea, VictoryPolarAxis } from "victory-native"
import Svg, { G, Text as Svgtext, TSpan } from "react-native-svg"
import { shuffleData } from "../../utils/common"
import { connect } from "react-redux"

export interface GpaPolarLabelProps {
  x?: number
  y?: number
  courseName?: string
  datum?
}

export function GpaPolarLabel(props: GpaPolarLabelProps) {
  {
    let { x, y, courseName } = props
    let lineHeight = 10
    let tspans = []
    let tgroup

    if (courseName.length > 12) {
      courseName = courseName.substr(0, 11) + "…"
    }

    let n = courseName
    let l = courseName.length

    switch (l) {
      case 12:
        tspans = [
          n.substring(0, 4), n.substring(4, 8), n.substring(8, 12)
        ]
        break
      case 11:
        tspans = [
          n.substring(0, 4), n.substring(4, 8), n.substring(8, 11)
        ]
        break
      case 10:
        tspans = [
          n.substring(0, 3), n.substring(3, 7), n.substring(7, 10)
        ]
        break
      case 9:
        tspans = [
          n.substring(0, 3), n.substring(3, 6), n.substring(6, 9)
        ]
        break
      case 8:
        tspans = [ n.substring(0, 4), n.substring(4, 8) ]
        break
      case 7:
        tspans = [ n.substring(0, 4), n.substring(4, 7) ]
        break
      case 6:
        tspans = [ n.substring(0, 3), n.substring(3, 6) ]
        break
      case 5:
        tspans = [ n.substring(0, 3), n.substring(3, 5) ]
        break
      default:
        tspans = [n]
        break
    }

    switch (tspans.length) {
      case 3:
        tgroup = [
          <TSpan key="0" x="0" y={String(-lineHeight)}>{tspans[0]}</TSpan>,
          <TSpan key="1" x="0" dy={String(lineHeight)}>{tspans[1]}</TSpan>,
          <TSpan key="2" x="0" dy={String(lineHeight)}>{tspans[2]}</TSpan>,
        ]
        break
      case 2:
        tgroup = [
          <TSpan key="0" x="0" y={String(-lineHeight / 2)}>{tspans[0]}</TSpan>,
          <TSpan key="1" x="0" dy={String(lineHeight)}>{tspans[1]}</TSpan>,
        ]
        break
      case 1:
        tgroup = [
          <TSpan key="0" x="0" y="0">{tspans[0]}</TSpan>,
        ]
    }

    return (
      <G x={x} y={y}>
        <Svgtext
          textAnchor="middle"
          fontSize={7}
          fill={color.primaryLighter}
          fontFamily={typography.primary}
        >
          {tgroup}
        </Svgtext>
      </G>
    )
  }
}

export interface GpaRadarProps {
  style?: ViewStyle
  gpa?
  semesterIndex?
}

export class GpaRadar extends React.Component<GpaRadarProps, {}> {

  render() {
    const { style, gpa } = this.props
    let shuffled = shuffleData([...this.props.gpa.data.gpaDetailed[this.props.semesterIndex].data])
    let processed = shuffled.map(course => ({ x: course.name, y: course.score }))

    if (gpa.status !== "VALID") {
      return <View />
    }
    const predefinedStyle: ViewStyle = {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    } as ViewStyle
    return (
      <TouchableOpacity onPress={() => this.forceUpdate()}>
        <View style={[predefinedStyle, style]}>
          <Svg>
            <VictoryChart
              polar
              domain={{ y: [ 50, 100 ] }}
            >
              <VictoryGroup
                colorScale={[color.primaryLighter]}
                style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
              >
                <VictoryArea
                  data={processed}
                  labelComponent={
                    <G/>
                  }
                />
              </VictoryGroup>
              {
                processed.map((key, i) => {
                  return (
                    <VictoryPolarAxis
                      key={i}
                      dependentAxis
                      style={{
                        axis: { stroke: "none" },
                      }}
                      label="foo"
                      axisLabelComponent={
                        <GpaPolarLabel courseName={key.x}/>
                      }
                      tickLabelComponent={<G/>}
                      axisValue={i + 1}
                    />
                  )
                })
              }
              <VictoryPolarAxis
                labelPlacement="parallel"
                tickFormat={() => ""}
                style={{
                  axis: { stroke: "none" },
                  grid: { stroke: color.primary, opacity: 0.5, strokeWidth: 0.25 }
                }}
              />
            </VictoryChart>
          </Svg>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gpa: state.dataReducer.gpa,
    semesterIndex: state.semesterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const connectedGpaRadar = connect(mapStateToProps, mapDispatchToProps)(GpaRadar)
export default connectedGpaRadar