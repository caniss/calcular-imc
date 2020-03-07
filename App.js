// https://snack.expo.io/@jr_acn/65abc5

import * as React from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Card } from 'react-native-paper';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    altura: '',
    peso: '',
    resultado: 'Preencha os dados e calcule',
  };

  calculate = () => {
    const { peso, altura } = this.state;
    if (!isNaN(Number(peso)) && !isNaN(Number(altura))) {
      const value = Number(peso / Math.pow(altura, 2));
      const valor = parseFloat(value.toFixed(2));

      if (valor <= 16.9) {
        this.setState({ resultado: 'Muito abaixo do peso ' + valor });
      } else if (valor >= 17 && valor <= 18.4) {
        this.setState({ resultado: 'Abaixo do peso ' + valor });
      } else if (valor >= 18.5 && valor <= 24.9) {
        this.setState({ resultado: 'Peso normal ' + valor });
      } else if (valor > 24.9 && valor <= 29.9) {
        this.setState({ resultado: 'Acima do peso ' + valor });
      } else if (valor > 29.9 && valor <= 34.9) {
        this.setState({ resultado: 'Obesidade Grau I ' + valor });
      } else if (valor >= 34.9 && valor <= 40) {
        this.setState({ resultado: 'Obesidade Grau II ' + valor });
      } else {
        this.setState({ resultado: 'Obesidade Grau III ' + valor });
      }
    }
  };

  onChangeText = value => {
    this.setState(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Calcule seu IMC:</Text>
        <Card>
          <TextInput
            value={this.state.peso}
            placeholder={'Informe seu peso'}
            onChangeText={peso => this.onChangeText({ peso })}
            keyboardType={'numeric'}
          />
          <TextInput
            value={this.state.altura}
            placeholder={'Informe sua altura'}
            keyboardType={'numeric'}
            onChangeText={altura => this.onChangeText({ altura })}
          />
          <Button onPress={() => this.calculate()} title="Calcular" />

          <Text style={styles.paragraph}>{this.state.resultado}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
