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
  const isExistsI = params.charAt(0) === 'I';
  const isExistsE = params.charAt(0) === 'E';

  if(isExistsI) {
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
  }
  else if(isExistsE) {
    res.send({
      message: 'Reponse Successful',
      code: 200,
      data: [
        {
          title: 'EBUPROFENO',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'https://www.redaccionmedica.com/images/destacados/tomar-paracetamol-durante-el-embarazo-reduce-la-fertilidad-de-las-hijas-5708_620x368.jpg',
          type: 'LEV'
        },
        {
          title: 'EBUCOD',
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

app.get('/searchdiseases/:uid', (req, res) => {
  const params = req.params.uid;
  const isExistsI = params.charAt(0) === 'I';
  const isExistsE = params.charAt(0) === 'E';

  if(isExistsI) {
    res.send({
      message: 'Reponse Successful',
      code: 200,
      data: [
        {
          title: 'Insomnio',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'https://media.diariolasamericas.com/adjuntos/216/imagenes/001/043/0001043623.png',
          type: 'LEV'
        },
        {
          title: 'Intoxicación elítica',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'data:image/jpeg;base64,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',
          type: 'LEV'
        }
      ]
    })
  }
  else if(isExistsE) {
    res.send({
      message: 'Reponse Successful',
      code: 200,
      data: [
        {
          title: 'Ébola',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'http://img2.rtve.es/i/?w=1600&i=1407336035932.jpg',
          type: 'LEV'
        },
        {
          title: 'Epilepsia',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
          url: 'http://w2.noticierovenevision.net.s3.amazonaws.com/public/images/images_noticias/6-780.jpg',
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


