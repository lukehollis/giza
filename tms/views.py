from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404

from tms import models
from utils.views_utils import RELATED_DISPLAY_TEXT
import json

def index(request):
	return render(request, 'tms/index.html')

def site(request, id):
	# get site in elasticsearch and render or return 404
	try:
		site = models.get_item(id, 'sites')
		print site
		return render(request, 'tms/site.html', {'site': site})
	except:
		raise Http404("Site does not exist")

def site_related_items(request, id, relation):
	# get site's related items in elasticsearch and render or return 404
	try:
		site = models.get_item(id, 'sites')
		related_items = site['relateditems'][relation]
		return render(request, 'tms/site_related.html', {'relateditems': related_items, 
			'displaytext' : RELATED_DISPLAY_TEXT[relation],
			'relation' : relation })
	except:
		raise Http404("Site does not exist")

def find(request, id):
	try:
		find = models.get_item(id, 'finds')
		return render(request, 'tms/find.html', {'find': find})
	except:
		raise Http404("Find does not exist")

def find_related_items(request, id, relation):
	# get find's related items in elasticsearch and render or return 404
	try:
		find = models.get_item(id, 'finds')
		related_items = find['relateditems'][relation]
		return render(request, 'tms/find_related.html', {'relateditems': related_items, 
			'displaytext' : RELATED_DISPLAY_TEXT[relation],
			'relation' : relation })
	except:
		raise Http404("Find does not exist")

def diarypage(request, id):
	return

def diarypage_related_items(request, id, relation):
	return

def ancientperson(request, id):
	return

def ancientperson_related_items(request, id, relation):
	return

def modernperson(request, id):
	return

def modernperson_related_items(request, id, relation):
	return

def institution(request, id):
	return

def institution_related_items(request, id, relation):
	return

def group(request, id):
	return

def group_related_items(request, id, relation):
	return

def animal(request, id):
	return

def animal_related_items(request, id, relation):
	return

def photo(request, id):
	return

def photo_related_items(request, id, relation):
	return

def plansanddrawings(request, id):
	try:
		plansanddrawings = models.get_item(id, 'plansanddrawings')
		return render(request, 'tms/plansanddrawings.html', {'plansanddrawings': plansanddrawings})
	except:
		raise Http404("Plan and Drawing does not exist")

def plansanddrawings_related_items(request, id, relation):
	return

def pubdoc(request, id):
	return

def pubdoc_related_items(request, id, relation):
	return

def unpubdoc(request, id):
	try:
		unpubdoc = models.get_item(id, 'unpubdocs')
		return render(request, 'tms/unpubdoc.html', {'unpubdoc': unpubdoc})
	except:
		raise Http404("Unpublished Document does not exist")

def unpubdoc_related_items(request, id, relation):
	return

def add_headers(response):
    response["Access-Control-Allow-Origin"] = "*"
    response["Content-Type"] = "application/ld+json"
    return response