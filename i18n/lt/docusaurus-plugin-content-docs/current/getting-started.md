# Pradžios vadovas

Sveiki atvykę į Paysera API dokumentaciją! Šis vadovas padės jums greitai integruoti Paysera mokėjimų apdorojimo funkcijas į jūsų programą.

## Būtinos sąlygos

Prieš pradėdami, įsitikinkite, kad turite:

- Paysera prekybininko paskyrą ([Registruokitės čia](https://paysera.com))
- Bazines REST API žinias
- Jūsų pageidaujamą programavimo kalbos aplinką

## Greitasis startas

### 1. Gaukite savo API duomenis

1. Prisijunkite prie savo [Paysera prekybininko valdymo skydelio](https://bank.paysera.com)
2. Eikite į **Nustatymai** → **API**
3. Sugeneruokite savo API duomenis:
   - **Projekto ID**: Jūsų unikalus projekto identifikatorius
   - **API raktas**: Jūsų privatusis API raktas (saugokite jį!)

:::warning Svarbu
Niekada neatskleidžite savo API rakto kliento pusės kode arba viešuose repozitorijuose.
:::

### 2. Autentifikacija

Paysera API naudoja **OAuth 2.0** autentifikaciją. Štai kaip autentifikuotis:

<div className="api-endpoint">
POST https://api.paysera.com/oauth/v1/token
</div>

#### Užklausos pavyzdys

```bash
curl -X POST https://api.paysera.com/oauth/v1/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  -d "client_id=JŪSŲ_PROJEKTO_ID" \
  -d "client_secret=JŪSŲ_API_RAKTAS"
```

#### Atsakymas

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "payments transactions"
}
```

### 3. Jūsų pirmoji API užklausa

Padarykime paprastą API užklausą, kad patikrintumėte savo nustatymą:

<div className="api-endpoint">
<span className="api-method api-method--get">GET</span>
https://api.paysera.com/account/v1/me
</div>

```bash
curl -X GET https://api.paysera.com/account/v1/me \
  -H "Authorization: Bearer JŪSŲ_PRIEIGOS_RAKTAS" \
  -H "Content-Type: application/json"
```

#### Tikėtinas atsakymas

```json
{
  "id": "12345",
  "email": "prekybininkas@example.com",
  "status": "active",
  "permissions": ["payments", "transactions"]
}
```

## Diegimas

### PHP SDK

```bash
composer require paysera/lib-api-client
```

```php
<?php
use Paysera\Client\ApiClient;

$client = new ApiClient([
    'base_url' => 'https://api.paysera.com',
    'oauth' => [
        'client_id' => 'JŪSŲ_PROJEKTO_ID',
        'client_secret' => 'JŪSŲ_API_RAKTAS'
    ]
]);
```

### JavaScript/Node.js SDK

```bash
npm install paysera-api-client
```

```javascript
const PayseraClient = require('paysera-api-client');

const client = new PayseraClient({
  baseURL: 'https://api.paysera.com',
  projectId: 'JŪSŲ_PROJEKTO_ID',
  apiSecret: 'JŪSŲ_API_RAKTAS'
});
```

### Python SDK

```bash
pip install paysera-api-client
```

```python
from paysera import PayseraClient

client = PayseraClient(
    base_url='https://api.paysera.com',
    project_id='JŪSŲ_PROJEKTO_ID',
    api_secret='JŪSŲ_API_RAKTAS'
)
```

## Aplinkos nustatymas

### Testuojamoji vs Produkcijos aplinka

| Aplinka | Bazinis URL | Paskirtis |
|-------------|----------|---------|
| **Testuojamoji** | `https://sandbox-api.paysera.com` | Testavimas ir kūrimas |
| **Produkcijos** | `https://api.paysera.com` | Realūs mokėjimai |

:::tip Kūrėjų patarimas
Visada pradėkite nuo testuojamosios aplinkos, kad išbandytumėte savo integraciją prieš paleidžiant realiai.
:::

### Užklausų apribojimai

| Galutinio taško tipas | Užklausų per minutę | Sprogimo limitas |
|---------------|-------------------|-------------|
| Autentifikacija | 60 | 10 |
| Mokėjimai | 300 | 50 |
| Paskyros info | 120 | 20 |

## Integracijos testavimas

Naudokite šiuos testinius kortelių numerius testuojamojoje aplinkoje:

| Kortelės numeris | Rezultatas |
|-------------|--------|
| `4111111111111111` | Sėkmingas mokėjimas |
| `4000000000000002` | Atmestas mokėjimas |
| `4000000000000119` | Apdorojimo klaida |

## Kiti žingsniai

Dabar, kai turite pagrindinį nustatymą, ištyrinėkite šias pagrindines funkcijas:

1. **[Mokėjimų apdorojimas](./features/payment-processing)** - Priimkite mokėjimus iš klientų
2. **[Paskyrų valdymas](./features/account-management)** - Valdykite vartotojų paskyras ir balansus
3. **[Webhook'ai](./features/webhooks)** - Gaukite realaus laiko mokėjimo pranešimus
4. **[API žinynas](./api/payments)** - Detalus API dokumentacija

## Reikia pagalbos?

- 📚 Žiūrėkite mūsų [DUK](./faq) dėl dažnų klausimų
- 💬 Aplankykite mūsų [Kūrėjų forumą](https://developers.paysera.com/forum)
- 📧 Susisiekite su palaikymu: [api-support@paysera.com](mailto:api-support@paysera.com)
- 📞 Skambinkite techninio palaikymo telefonu: +370 5 214 3000

:::info Naudingos priemonės
- [Paysera kūrėjų portalas](https://developers.paysera.com)
- [API būsenos puslapis](https://status.paysera.com)
- [Postman kolekcija](https://documenter.getpostman.com/view/paysera-api)
:::