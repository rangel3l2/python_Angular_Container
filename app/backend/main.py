from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from classes.driver import DriverOperations
from pydantic import BaseModel
from classes.school import SchoolOperations

app = FastAPI()

origins = [
     "http://localhost:3000",
     "http://localhost:8000",
     "http://localhost:4200",
 ]
app.add_middleware(
     CORSMiddleware,
     allow_origins=origins,
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"],
 )

class SearchInfo(BaseModel):
    type_school: str
    number_schools: int

@app.post("/")
async def home():
    return {"status": "sucessful"}

@app.post("/start-search")
async def executar_back(search_info: SearchInfo):
    driver_chrome = DriverOperations()
    driver_chrome.start_driver()

    school = SchoolOperations(driver_chrome.driver)
    number_found_schools = school.search_school(search_info.number_schools,search_info.type_school)
    if number_found_schools == search_info.number_schools:
        return {"number_found_schools": number_found_schools}
    else:
        return {"number_not_found_schools": search_info.number_schools - number_found_schools}

@app.get("/download-file")
async def return_file():
    return FileResponse("US_Schools.csv")
