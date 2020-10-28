import json
import feedparser
from flask import escape
import datetime
import sys
import time

feeds = [
    {"feed_provider": "Anime News Network",
     "homepage": "https://www.animenewsnetwork.com",
     "feed": "https://www.animenewsnetwork.com/all/rss.xml"},
    {"feed_provider": "Honey's Anime",
     "homepage": "https://honeysanime.com",
     "feed": "https://honeysanime.com/feed/"},
    {"feed_provider": "All the Anime",
     "homepage": "https://blog.alltheanime.com",
     "feed": "http://blog.alltheanime.com/feed"},
    {"feed_provider": "Angry Anime Bitches",
     "homepage": "https://www.angryanimebitches.com/",
     "feed": "https://www.angryanimebitches.com/feed"}
]
items = []
date = datetime.datetime.now()
dumpto = sys.argv[1]

items = []
for i in feeds:
    for j in feedparser.parse(i["feed"])["items"]:
        item = {"title": j["title"]}
        try:
            item.update({"link": j["link"]})
        except:
            item.update({"link": j["links"]})
        try:
            pub_time = time.mktime(j["published_parsed"])
        except:
            pub_time = time.mktime(j["updated_parsed"])
        if date - datetime.datetime.fromtimestamp(pub_time) > datetime.timedelta(days=2):
            break
        item.update({"time": pub_time})
        item.update(i)
        items.append(item)

items.sort(key=lambda x: x['time'], reverse=True)

json_file = open(dumpto, 'w')
json.dump(items, json_file)
json_file.close()
