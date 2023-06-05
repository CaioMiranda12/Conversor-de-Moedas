const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 141045.02

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    //realValueText.innerHTML = inputReal
    //currencyValueText.innerHTML = inputReal / dolar

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
  { style: 'currency', 
    currency: 'BRL' }
).format(inputReal);

  if (select.value === 'US$ Dólar americano') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
  { style: 'currency', 
    currency: 'USD' }
).format(inputReal / dolar);
  }

  if (select.value === '€ Euro') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
  { style: 'currency', 
    currency: 'EUR' }
).format(inputReal / euro);
  }

  if (select.value === 'Bitcoin') {
    
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { 
    style: 'currency', 
    currency: 'BTC',
    minimumFractionDigits: 8
    }
    ).format(inputReal / bitcoin); 

  }

}

    

const currencyChange = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === 'US$ Dólar americano') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImg.src="./assets/eua.png"
  }

  if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImg.src="./assets/euro.png"
  }

  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src="./assets/bitcoin.png"
  }


  convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', currencyChange)