import requests
from bs4 import BeautifulSoup
import json
import sys
import random


class animeNewsScraper(object):
    def anime_news_network(self):
        try:
            URL = "https://www.animenewsnetwork.com/"
            r = requests.get(URL)
            soup = BeautifulSoup(r.content, 'html5lib')

            ctr = 0

            for row in soup.findAll('div', attrs={'class': 'herald box news'}):
                if ctr == 15:
                    break
                image = ''
                try:
                    image = 'https://animenewsnetwork.com' + \
                        row.find('div', attrs={'class': 'thumbnail lazyload'})[
                            'data-src']
                except:
                    image = ''
                link = 'https://animenewsnetwork.com' + row.h3.a['href']
                text = row.h3.a.text
                #print(image, link, text)
                try:
                    self.cards.append({
                        'image': image,
                        'link': link,
                        'heading': text,
                        'news_provider': 'AnimeNewsNetwork',
                        'news_provider_link': URL
											})
                except:
                    self.cards = [{
                        'image': image,
                        'link': link,
                        'heading': text,
                        'news_provider': 'AnimeNewsNetwork',
                        'news_provider_link': URL
											}]
                ctr += 1
        except:
            print("ann failed")

    def anime_uk_news(self):
        try:
            URL = "https://animeuknews.net/"
            r = requests.get(URL)
            soup = BeautifulSoup(r.content, 'html5lib')

            ctr = 0

            for row in soup.findAll('article', attrs={'class': 'c-post-grid-item'}):
                if ctr == 5:
                    break
                image = ''
                try:
                    image = row.find('img')['src']
                except:
                    image = ''
                link = row.find(
                    'a', attrs={'class': 'c-post-grid-item__link'})['href']
                text = row.h2.a.text
                card = {'image': image, 'link': link, 'heading': text,
                        'news_provider': 'AnimeUKNews', 'news_provider_link': URL}
                try:
                    self.cards.append(card)
                except:
                    self.cards = [card]
                ctr += 1
        except:
            print("aun failed")

    def asahi_shimbun(self):
        try:
            URL = "http://www.asahi.com/ajw/culture/manga_anime/"
            r = requests.get(URL)
            soup = BeautifulSoup(r.content, 'html5lib')

            ctr = 0
            list_of_articles = soup.find(
                'ul', attrs={'class': 'List ListHeadline'})
            for row in list_of_articles.findAll('li'):
                if ctr == 10:
                    break
                image = ''
                link = 'http://www.asahi.com' + row.a['href']
                for i in row.a.findAll('span'):
                    i.clear()
                text = row.a.text
                card = {
                    'image': image,
                    'link': link,
                    'heading': text,
                    'news_provider': 'AsahiShimbun',
                    'news_provider_link': URL}
                try:
                    self.cards.append(card)
                except:
                    self.cards = [card]
                ctr += 1
        except:
            print("asahi failed")

    def cbr(self):
        try:
            URL = "https://www.cbr.com/category/anime-news/"
            r = requests.get(URL)
            soup = BeautifulSoup(r.content, 'html5lib')

            ctr = 0
            for row in soup.findAll('article', attrs={'class': 'browse-clip'}):
                if ctr == 10:
                    break
                try:
                    image = row.picture.find(
                        'source', attrs={'sizes': '456px'})['srcset']
                except:
                    try:
                        image = row.picture.find('source')['data-srcset']
                    except:
                        image = ''
                image = '&'.join(image.split(' ')[0].split('&amp;'))
                link = "https://cbr.com" + row.h3.a['href']
                text = row.h3.a['title']
                card = {
                    'image': image,
                    'link': link,
                    'heading': text,
                    'news_provider': 'CBR',
                    'news_provider_link': URL}
                try:
                    self.cards.append(card)
                except:
                    self.cards = [card]
                ctr += 1
        except:
            print("cbr failed")

    def manga_tokyo(self):
        try:
            URL = "https://manga.tokyo/"
            r = requests.get(URL)
            soup = BeautifulSoup(r.content, 'html5lib')

            ctr = 0
            for row in soup.findAll('article'):
                if ctr == 10:
                    break
                try:
                    image = row.img['src']
                except:
                    image = ''
                link = row.h3.a['href']
                text = row.h3.a.text
                card = {
                    'image': image,
                    'link': link,
                    'heading': text,
                    'news_provider': 'MANGA.TOKYO',
                    'news_provider_link': URL}
                try:
                    self.cards.append(card)
                except:
                    self.cards = [card]
                ctr += 1
        except:
            print("manga.tokyo failed")

    def compiled_news(self):
        print("compiling news")
        self.anime_news_network()
        # self.anime_uk_news()
        self.asahi_shimbun()
        self.cbr()
        self.manga_tokyo()
        random.shuffle(self.cards)
        return self.cards

    def save_compiled_news_to(self, filename):
        output_string = self.compiled_news()
        f = open(filename, 'w')
        json.dump(output_string, f)
        f.close()


if len(sys.argv) == 2:
    anime_news = animeNewsScraper()
    anime_news.save_compiled_news_to(sys.argv[1])
