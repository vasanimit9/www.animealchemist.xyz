import feedparser
import json
import sys

feed = feedparser.parse('https://www.livechart.me/feeds/episodes')

f = open(sys.argv[1], 'w')
json.dump(feed['entries'], f)
f.close()
