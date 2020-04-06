# Conversão de Database de Sinônimos

## Overview

Esse script é responsável por extrair um dicionário de sinônimos do formato .dat para o formato CSV. O dicionário foi obtido originalmente do repositório de Emerson Rocha [@fititnt](https://github.com/fititnt) e disponível em [Github](https://github.com/fititnt/DicSin-dicionario-sinonimos-portugues-brasileiro/blob/master/dicsin/th_pt_BR.dat)

A extração consiste em percorrer o arquivo .dat selecionando a palavra raiz e seus sinônimos indicados logo abaixo e salvá-los na estrutura definida por `raiz,sinonimo1,sinonimo2,...`

## Dependências

- Python VirtualEnv : `apt-get install python3-venv`
- pip
- pandas

## Preparando ambiente virtual

### Criação do virtualenv

Para manter seu SO com pacotes de Python padrão e sem pacotes extras não utilizados, criaremos um ambiente para desenvolvimento virtual onde serão instalados os pacotes necessários somente para aplicação de conversão.

```shell
python3 -m venv env
```

Isso criará uma pasta no local que o seu terminal estiver apontando. Você pode criar este ambiente onde quiser, lembrando que para executar o script você deverá apontar e ativar este ambiente para que ele execute com as dependências corretamente.

- Ative seu virtualenv

```
source path/to/myvenv/bin/activate
```

### Instalação dos pacotes no virtualenv

```shell
pip install -r requirements.txt
```

## Execução

- Execute o script

```
python3 script.py
```
