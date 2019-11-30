module.exports = db => {
  const { A_BusinessPartnerAddress: Addresses } = db.entities(
    'API_BUSINESS_PARTNER'
  )

  DELETE.from(Addresses)
  INSERT.into(Addresses).entries(
    {
      BusinessPartner: 'anonymous',
      AddressID: '28238',
      CityName: 'Walldorf',
      StreetName: 'Dietmar-Hopp-Allee',
      HouseNumber: '123'
    },
    {
      BusinessPartner: '1003765',
      AddressID: '28241',
      CityName: 'Palo Alto',
      StreetName: 'Hillview Avenue',
      HouseNumber: '26'
    },
    {
      BusinessPartner: '1003766',
      AddressID: '28244',
      CityName: 'Hallbergmoos',
      StreetName: 'Zeppelinstraße',
      HouseNumber: '93'
    },
    {
      BusinessPartner: '1003767',
      AddressID: '28247',
      CityName: 'Potsdam',
      StreetName: 'Konrad-Zuse-Ring',
      HouseNumber: '29'
    }
  )
}
