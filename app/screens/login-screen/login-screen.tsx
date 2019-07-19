import * as React from "react"
import { StatusBar, View, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, layoutParam } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { TextField } from "../../components/text-field"
import { Button } from "../../components/button"
import { twtGet } from "../../services/twt-fetch"
import AsyncStorage from "@react-native-community/async-storage"
import store from "../../store"

export interface LoginScreenProps extends NavigationScreenProps<{}> {
}

const ss = {
  container: {
    paddingHorizontal: layoutParam.paddingHorizontal,
    paddingVertical: layoutParam.paddingVertical
  } as ViewStyle,
  headerBar: {
    marginBottom: 24,
  } as ViewStyle,
  fieldWithMarginTop: {
    marginTop: 24,
  } as ViewStyle,
}

export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  state = {
    username: "",
    password: ""
  }

  storeToken = async (token) => {
    store.dispatch({
      type: "SET_TOKEN",
      payload: token
    })
    try {
      await AsyncStorage.setItem('@WePeiyangRN_token', token)
    } catch (e) {
      console.log("Asnyc Storage Saving Error: ", e)
    }
  }

  login = () => {
    twtGet("v1/auth/token/get", { twtuname: this.state.username, twtpasswd: this.state.password })
      .then((response) => response.json())
      .then((responseJson) => {
        const token = responseJson.data.token
        this.storeToken(token)
          .then((response) => {
            console.log("Successfully saved token locally. ", response)
            this.props.navigation.goBack()
          })
          .catch((e) => {
            console.log("Failed to store token locally. Additional manual login may be need during the next start. ", e)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return (
      <Screen preset="scroll">
        <StatusBar backgroundColor={color.background} barStyle="dark-content" />
        <View style={ss.container}>
          <View style={ss.headerBar}>
            <Text tx="loginScreen.greetings" preset="h2"/>
          </View>
          <View>
            <TextField
              placeholderTx="loginScreen.username"
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}
              autoFocus={true}
              autoCorrect={false}/>
            <TextField
              placeholderTx="loginScreen.password"
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry={true}
              autoCorrect={false}/>
            <Button style={ss.fieldWithMarginTop} tx="common.login" onPress={this.login} />
          </View>
        </View>
      </Screen>
    )
  }
}
