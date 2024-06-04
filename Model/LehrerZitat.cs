namespace LehrerZitateApi.Model
{
    public class LehrerZitat 
    {
        public long Id { get; set; }
        public string Quote { get; set; }
        public string Teacher { get; set; }
        public bool IsPosted { get; set; }
        public string FalseTeacher { get; set; }
    }
}
