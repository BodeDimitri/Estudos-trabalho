<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

$client = new Client();

$reposta = $client -> request(method: 'GET', uri: 'https://cursos.alura.com.br/dashboard');

$html = $reposta -> getBody();

$crawler = new Crawler();
$crawler-> addHtmlContent($html);

$cursos = $crawler-> filter(selector: 'span.card-curso__nome');

foreach ($cursos as $curso) {
    echo $curso->textContent . PHP_EOL;
}