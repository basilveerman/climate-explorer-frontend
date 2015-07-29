FROM pcic/geospatial-python

ADD . /app

RUN pip install -r /app/requirements.txt

EXPOSE 5000

CMD python /app/src/app.py
