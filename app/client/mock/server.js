const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/searchmedicines/:uid', (req, res) => {
  const params = req.params.uid;
  const isExists = params.charAt(0) === 'I';

  if(isExists) {
    res.send({
      message: 'Reponse Successful',
      code: 200,
      data: [
        {
          title: 'IBUPROFENO',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'https://www.redaccionmedica.com/images/destacados/tomar-paracetamol-durante-el-embarazo-reduce-la-fertilidad-de-las-hijas-5708_620x368.jpg',
          type: 'LEV'
        },
        {
          title: 'IBUCOD',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'https://www.redaccionmedica.com/images/destacados/tomar-paracetamol-durante-el-embarazo-reduce-la-fertilidad-de-las-hijas-5708_620x368.jpg',
          type: 'LEV'
        }
      ]
    })
  } else {
    res.send({
      message: 'Failed message',
      code: 205,
      data: [
        {
          title: 'No se encontró resultados'
        }
      ]
    })
  }
});

app.listen(port, () => {
  console.log('Ready localhost on port: ' + port);
})


