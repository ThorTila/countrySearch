/* global $ */
(function () {'use strict';
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesBox = $('#countries');
$('#search').click(searchCountries);
$('#country-name').keypress(function (e) {
    if (e.which === 13) {
        searchCountries();
    }
});
function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) {
        countryName = 'Poland';
    }
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountries
    });
}
function showCountries(resp) {
    countriesBox.empty();
    resp.forEach(function (item) {
        var countryBox = $('<div>').addClass('country').appendTo(countriesBox);
        $('<h3>').text(item.name).appendTo(countryBox);
        var countryList = $('<dl>').appendTo(countryBox);
        $('<dt>').text('Capital').appendTo(countryList);
        $('<dd>').text(item.capital).appendTo(countryList);
        $('<dt>').text('Region').appendTo(countryList);
        $('<dd>').text(item.region).appendTo(countryList);
        $('<dt>').text('Subregion').appendTo(countryList);
        $('<dd>').text(item.subregion).appendTo(countryList);
        $('<dt>').text('Population').appendTo(countryList);
        $('<dd>').text(item.population).appendTo(countryList);
        $('<dt>').text('Languages').appendTo(countryList);
        $('<dd>').text(item.languages).appendTo(countryList);
        $('<dt>').text('Top level domain').appendTo(countryList);
        $('<dd>').text(item.topLevelDomain).appendTo(countryList);
        $('<dt>').text('Area').appendTo(countryList);
        $('<dd>').text(item.area).appendTo(countryList);
        $('<dt>').text('Borders').appendTo(countryList);
        if (item.borders.length > 0) {
            $('<dd>').text(item.borders.join(', ')).appendTo(countryList);
        } else {
            $('<dd>').text('No borders').appendTo(countryList);
        }
        $('<h4>').text('Translations').appendTo(countryBox);
        var translations = $('<dl>').appendTo(countryBox);
        $('<dt>').text('Deutsch').appendTo(translations);
        $('<dd>').text(item.translations.de).appendTo(translations);
        $('<dt>').text('Spanish').appendTo(translations);
        $('<dd>').text(item.translations.es).appendTo(translations);
        $('<dt>').text('French').appendTo(translations);
        $('<dd>').text(item.translations.fr).appendTo(translations);
        $('<dt>').text('Japanese').appendTo(translations);
        $('<dd>').text(item.translations.ja).appendTo(translations);
        $('<dt>').text('Italian').appendTo(translations);
        $('<dd>').text(item.translations.it).appendTo(translations);
    });
}
             })();