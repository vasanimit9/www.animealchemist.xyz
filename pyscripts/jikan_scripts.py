from jikanpy import Jikan
import sys
import json
import time

if sys.argv[1] == 'top':
    f = open(sys.argv[2], 'w')
    json.dump(Jikan().top('anime')['top'], f)
    f.close()
elif sys.argv[1] == 'season':
    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Fall'
    ]
    j = Jikan().season(
        int(time.strftime('%Y')),
        seasons[int(int(time.strftime('%m'))/3)]
    )
    f = open(sys.argv[2], 'w')
    json.dump(j['anime'], f)
    f.close()
elif sys.argv[1] == 'schedule':
    f = open(sys.argv[2], 'w')
    json.dump(Jikan().schedule(), f)
    f.close()
